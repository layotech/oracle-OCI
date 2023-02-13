/*
** Copyright (c) 2020, 2022, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.debug('Loaded Node Pool Javascript');

/*
** Define Node Pool Class
*/
class NodePool extends OkitArtifact {
    /*
    ** Create
    */
    constructor (data={}, okitjson={}) {
        super(okitjson);
        // Configure default values
        this.compartment_id = data.parent_id;
        this.cluster_id = ''
        this.node_shape = 'VM.Standard3.Flex'
        this.node_shape_config = {
            memory_in_gbs: 16,
            ocpus: 1
        }
        this.node_source_details = {
            image_id: '',
            image: '',
            source_type: 'IMAGE',
            boot_volume_size_in_gbs: 50
        }
        this.node_config_details = {
            placement_configs: [],
            size: 3,
            nsg_ids: []
        }
        // Update with any passed data
        this.merge(data);
        this.convert();
        Object.defineProperty(this, 'vcn_id', {get: function() {return this.getOkitJson().getResource(this.cluster_id).vcn_id;}});
        Object.defineProperty(this, 'flex_shape', {get: function() {return !this.node_shape ? false : this.node_shape.endsWith('.Flex')}, set: function(flex_shape) {}, enumerable: true });
    }

    newPlacementConfig() {

    }
    /*
    ** Name Generation
    */
    getNamePrefix() {
        return super.getNamePrefix() + 'np';
    }
    /*
    ** Static Functionality
    */
    static getArtifactReference() {
        return 'Node Pool';
    }
}
/*
** Dynamically Add Model Functions
*/
OkitJson.prototype.newNodePool = function(data) {
    this.getNodePools().push(new NodePool(data, this));
    return this.getNodePools()[this.getNodePools().length - 1];
}
OkitJson.prototype.getNodePools = function() {
    if (!this.node_pools) this.node_pools = []
    return this.node_pools;
}
OkitJson.prototype.getNodePool = function(id='') {
    return this.getNodePools().find(r => r.id === id)
}
OkitJson.prototype.deleteNodePool = function(id) {
    this.node_pools = this.node_pools ? this.node_pools.filter((r) => r.id !== id) : []
}
