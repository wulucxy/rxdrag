import { IDocument } from "@rxdrag/core"
import { IComponents, PreviewRoot } from "@rxdrag/react-shared"
import { IReactionMaterial, INodeSchema } from "@rxdrag/schema"
import React from "react"
import { memo, useEffect, useMemo, useState } from "react"
import { ThemeProvider } from "styled-components"


export const PreviewRender = memo((
  props: {
    components?: IComponents
    doc?: IDocument,
    reactionMaterials: IReactionMaterial[]
  }
) => {
  const { components, doc, reactionMaterials } = props
  const [tree, setTree] = useState<INodeSchema>()
  const [viewType] = useDocumentViewTypeState(doc?.id)
  const [, token] = useToken()
  const theme = useMemo(() => {
    return {
      token
    }
  }, [token])

  useEffect(() => {
    if (viewType === 'preview') {
      setTree(doc?.getSchemaTree() || undefined)
    }
  }, [doc, viewType])

  return (
    <ThemeProvider theme={theme}>
      {
        tree &&
        <PreviewRoot
          components={components}
          reactionMaterials={reactionMaterials}
        >
          <Fieldy>
            <VirtualForm>
              <ComponentRender
                root={tree}
              />
            </VirtualForm>
          </Fieldy>
        </PreviewRoot>
      }
    </ThemeProvider>
  )
})