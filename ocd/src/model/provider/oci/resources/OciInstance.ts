/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OciInstanceAutoGenerated } from "./generated/OciInstance"

export interface OciInstance extends OciInstanceAutoGenerated {
}

export namespace OciInstance {
    export function newResource(type?: string): OciInstance {
        return {
            ...OciInstanceAutoGenerated.newResource('instance'),
        }
    }
}

export class OciInstanceClient {
    static new(): OciInstance {
        return OciInstance.newResource()
    }
}

export default OciInstanceClient