import { INodeSchema } from "@rxdrag/schema"
import React from "react"
import { memo, useEffect, useState } from "react"
import { ComponentView, IComponentRenderSchema } from "./ComponentView"
import { transToRenderSchema } from "./transform"

export const ComponentRender = memo((props: {
  root: INodeSchema
}) => {
  const { root } = props
  const [node, setNode] = useState<IComponentRenderSchema>()

  useEffect(() => {
    if (root) {
      setNode(transToRenderSchema(root as any))
    } else {
      setNode(undefined)
    }
  }, [root])
  return (
    <>
      {node && <ComponentView node={node} />}
    </>
  )
})