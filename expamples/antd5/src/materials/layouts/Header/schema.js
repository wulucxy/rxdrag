import { createSchema } from "react-shells/ant5/shared/createSchema";
const options = {
    propsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$title",
            },
            children: [
                {
                    componentName: "Input",
                    "x-field": {
                        name: "title",
                        params: {
                            withBind: true,
                        }
                    },
                }
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$type",
            },
            children: [
                {
                    componentName: "Select",
                    "x-field": {
                        name: "type",
                        params: {
                            withBind: true,
                        }
                    },
                    props: {
                        options: [
                            {
                                value: 'primary',
                                label: 'Primary',
                            },
                            {
                                value: 'ghost',
                                label: 'Ghost',
                            },
                            {
                                value: 'dashed',
                                label: 'Dashed',
                            },
                            {
                                value: 'link',
                                label: 'Link',
                            },
                            {
                                value: 'text',
                                label: 'Text',
                            },
                            {
                                value: 'default',
                                label: 'Default',
                            },
                        ]
                    }
                }
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$disabled",
            },
            children: [
                {
                    componentName: "Switch",
                    "x-field": {
                        name: "disabled",
                        params: {
                            valuePropName: "checked",
                            withBind: true,
                        }
                    },
                }
            ]
        },
    ]
};
export const headerSchema = createSchema(options);