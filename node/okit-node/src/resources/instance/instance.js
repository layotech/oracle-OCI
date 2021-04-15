/*
** Copyright (c) 2020, 2021, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Author: Andrew Hopkinson
*/

import { OkitResource } from '../okit_resource.js'

class Instance extends OkitResource {
    static get def() {return `
    <g>
    	<path fill="#312D2A" d="M60.4,90.9H33.7V64.1h26.7V90.9z M40.7,83.9h12.7V71.1H40.7V83.9z M127.6,90.9h-26.7V64.1h26.7V90.9z
		M107.8,83.9h12.7V71.1h-12.7V83.9z M93.9,90.9H67.2V64.1h26.7V90.9z M74.2,83.9h12.7V71.1H74.2V83.9z M60.4,57.8H33.7V31.1h26.7
		V57.8z M40.7,50.8h12.7V38.1H40.7V50.8z M127.6,57.8h-26.7V31.1h26.7V57.8z M107.8,50.8h12.7V38.1h-12.7V50.8z M93.9,57.8H67.2V31.1
		h26.7V57.8z M74.2,50.8h12.7V38.1H74.2V50.8z M152.8,152.9H9V9.2h143.8V152.9z M18,143.9h125.8V18.2H18V143.9z M129.1,132.3H32.9
		V97.4h96.3V132.3z M41.9,123.3h78.3v-16.9H41.9V123.3z M105.8,110.2c-2.6,0-4.7,2.1-4.7,4.7c0,2.6,2.1,4.7,4.7,4.7
		c2.6,0,4.7-2.1,4.7-4.7C110.5,112.3,108.4,110.2,105.8,110.2z"/>
	</g>
   `}
    
    // Function Getters
    get parent_id() {return this.view.all_resources.find(resource => resource.id === this.subnet_id && resource.compartment_id === this.compartment_id) ? this.subnet_id : this.compartment_id}
    // -- Direct Subnet Access
    get primary_vnic() {return this.json.vnics[0]}
    get subnet_id() {return this.json.primary_vnic.subnet_id}
    set subnet_id(id) {this.json.primary_vnic.subnet_id = id}
}

export default Instance
export { Instance }
