/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OciRemotePeeringConnectionAutoGenerated } from "./generated/OciRemotePeeringConnection"

export interface OciRemotePeeringConnection extends OciRemotePeeringConnectionAutoGenerated {
}

export namespace OciRemotePeeringConnection {
    export function newResource(type?: string): OciRemotePeeringConnection {
        return {
            ...OciRemotePeeringConnectionAutoGenerated.newResource('remote_peering_connection'),
        }
    }
}

export class OciRemotePeeringConnectionClient {
    static new(): OciRemotePeeringConnection {
        return OciRemotePeeringConnection.newResource()
    }
}

export default OciRemotePeeringConnectionClient