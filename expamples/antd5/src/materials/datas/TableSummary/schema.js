import { createSchema } from "react-shells/ant5/shared/createSchema";
const options = {
    propsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$bordered",
            },
            children: [
                {
                    componentName: "Switch",
                    "x-field": {
                        name: "bordered",
                        params: {
                            valuePropName: "checked",
                            withBind: true,
                        }
                    },
                }
            ],
        },
        {
            componentName: "FormItem",
            props: {
                label: "$split",
            },
            children: [
                {
                    componentName: "Switch",
                    "x-field": {
                        name: "split",
                        params: {
                            valuePropName: "checked",
                            withBind: true,
                        }
                    },
                }
            ],
        },
        {
            componentName: "FormItem",
            props: {
                label: "$size",
            },
            children: [
                {
                    componentName: "Radio.Group",
                    "x-field": {
                        name: "size",
                        params: {
                            withBind: true,
                        }
                    },
                    props: {
                        optionType: "button",
                        options: [
                            {
                                label: "$large",
                                value: "large"
                            },
                            {
                                label: "$middle",
                                value: "middle"
                            },
                            {
                                label: "$small",
                                value: "small"
                            },
                        ],
                        defaultValue: "middle",
                    }
                }
            ]
        }
    ],
    slotsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$header",
            },
            children: [
                {
                    componentName: "SlotSwitch",
                    props: {
                        name: "header"
                    }
                },
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$footer",
            },
            children: [
                {
                    componentName: "SlotSwitch",
                    props: {
                        name: "footer"
                    }
                },
            ]
        },
    ],
    logicOptions: {
        canBindField: true,
    }
};
export const materialSchema = createSchema(options);