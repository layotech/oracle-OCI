/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

import OcdConsoleConfig from './OcdConsoleConfiguration'
import OcdDocument from './OcdDocument'

export interface MenuItem {
    label: string,
    click?: Function | undefined,
    submenu?: MenuItem[]
}

export const menuItems = [
    {
        label: 'File',
        click: undefined,
        submenu: [
            {
                label: 'New',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function) => {
                    console.info(`menuItems ocdDocument: ${ocdDocument}`)
                    console.info(`menuItems setOcdDocument: ${setOcdDocument}`)
                    const document: OcdDocument = OcdDocument.new()
                    console.info('New Document:', document)
                    setOcdDocument(document)
                }
            },
            {
                label: 'Open',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function) => {
                    const openFile = async () => {
                        try {
                            const options = {
                                multiple: false,
                                types: [
                                    {
                                        description: 'OKIT Files',
                                        accept: {
                                            'application/json': ['.okit'],
                                            // 'text/plain': ['.md']
                                        },
                                    },
                                ],
                            }
                            // Always returns an array.
                            // @ts-ignore 
                            const [handle] = await window.showOpenFilePicker(options)
                            const file = await handle.getFile()
                            const contents = await file.text()
                            return contents
                        } catch (err: any) {
                            console.error(err.name, err.message)
                            throw err
                        }
                    }
                    openFile().then((resp) => {
                        const ocdDocument = OcdDocument.new()
                        ocdDocument.design = JSON.parse(resp)
                        setOcdDocument(ocdDocument)
                    })
                }
            },
            {
                label: 'Open Recent',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function) => {

                }
            },
            {
                label: 'Save',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function) => {

                }
            },
            {
                label: 'Save As',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function) => {
                    const saveFile = async (ocdDocument: OcdDocument) => {
                        try {
                            const options = {
                                types: [
                                    {
                                        description: 'OKIT Files',
                                        accept: {
                                            'application/json': ['.okit'],
                                        },
                                    },
                                ],
                            }
                            // @ts-ignore 
                            const handle = await window.showSaveFilePicker(options);
                            const writable = await handle.createWritable();
                            await writable.write(JSON.stringify(ocdDocument.design, null, 2));
                            await writable.close();
                            return handle;
                        } catch (err: any) {
                            console.error(err.name, err.message);
                        }
                    }
                    saveFile(ocdDocument).then((resp) => console.info('Saved' + resp))             
                }
            },
            {
                label: 'Import From',
                click: undefined,
                submenu: [
                    {
                        label: 'OKIT Json',
                        click: undefined
                    },
                    {
                        label: 'OCI Resources',
                        click: undefined
                    },
                    {
                        label: 'Terraform State File',
                        click: undefined
                    }
                ]
            },
            {
                label: 'Export To',
                click: undefined,
                submenu: [
                    {
                        label: 'Image',
                        click: undefined,
                        submenu: [
                            {
                                label: 'PNG',
                                click: undefined
                            },
                            {
                                label: 'JPEG',
                                click: undefined
                            },
                            {
                                label: 'SVG',
                                click: undefined
                            }
                        ]
                    },
                    {
                        label: 'Terraform',
                        click: undefined
                    },
                    {
                        label: 'Markdown',
                        click: undefined
                    }
                ]
            }
                ]
    },
    {
        label: 'View',
        click: undefined,
        submenu: [
            {
                label: 'Designer',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'designer'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            },
            {
                label: 'Variables',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'variables'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            },
            {
                label: 'BoM',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'bom'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            },
            {
                label: 'Markdown',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'markdown'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            },
            {
                label: 'Tabular',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'tabular'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            },
            {
                label: 'Terraform',
                click: (ocdDocument: OcdDocument, setOcdDocument: Function, ocdConsoleConfig: OcdConsoleConfig, setOcdConsoleConfig: Function) => {
                    ocdConsoleConfig.config.displayPage = 'terraform'
                    setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig.config))
                }
            }
        ]
    },
    {
        label: 'Layout',
        click: undefined,
        submenu: [
            {
                label: 'Layers',
                click: undefined
            },
            {
                label: 'Reset View',
                click: undefined
            },
            {
                label: 'Zoom In',
                click: undefined
            },
            {
                label: 'Zoom Out',
                click: undefined
            }
        ]
    },
    {
        label: 'Arrange',
        click: undefined,
        submenu: [
            {
                label: 'To Front',
                click: undefined,
            },
            {
                label: 'To Back',
                click: undefined
            },
            {
                label: 'Bring Forward',
                click: undefined
            },
            {
                label: 'Send Back',
                click: undefined
            },
            {
                label: 'Auto Arrange',
                click: undefined
            }
        ]
    }
]