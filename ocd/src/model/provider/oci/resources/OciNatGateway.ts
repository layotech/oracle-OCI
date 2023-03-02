/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OciNatGatewayAutoGenerated } from "./generated/OciNatGateway"

export interface OciNatGateway extends OciNatGatewayAutoGenerated {
}

export namespace OciNatGateway {
    export function newResource(type?: string): OciNatGateway {
        return {
            ...OciNatGatewayAutoGenerated.newResource('nat_gateway'),
        }
    }
}

export class OciNatGatewayClient {
    static new(): OciNatGateway {
        return OciNatGateway.newResource()
    }
}

export default OciNatGatewayClient