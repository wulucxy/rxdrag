import { RightOutlined } from "@ant-design/icons"
import { Form } from "antd"
import React, { memo, useCallback, useContext, useMemo, useState } from "react"
import { CSSProperties } from "styled-components"
import { FoldItemContext } from "./context"
import "./style.less"
import cls from "classnames"
import { isBool } from "core/utils/types"
import { useToken } from "antd/es/theme/internal"

export type FoldItemProps = {
  children?: React.ReactNode
}

export const FoldItem = memo((props: FoldItemProps) => {
  const [expand, setExpand] = useState<boolean>()

  const handleExpandChange = useCallback((exp?: boolean | ((previousState?: boolean) => boolean)) => {
    if (isBool(exp)) {
      setExpand(exp)
    } else {
      setExpand(exp?.(expand))
    }
  }, [expand])

  const param = useMemo(() => {
    return {
      expand,
      setExpand: handleExpandChange
    }
  }, [expand, handleExpandChange])

  return (
    <FoldItemContext.Provider value={param}>
      <div className='rx-fold-item'>
        {props.children}
      </div>
    </FoldItemContext.Provider>
  )
})

export type FoldItemBaseProps = {
  label?: string,
  children?: React.ReactNode
}
export const FoldItemBase = memo((props: FoldItemBaseProps) => {
  const { label, children, } = props
  const { expand, setExpand } = useContext(FoldItemContext)

  const handleClick = useCallback(() => {
    setExpand(expand => !expand)
  }, [setExpand])

  return (
    <Form.Item
      label={
        <div className="rx-fold-base-item-label" onClick={handleClick}>
          <RightOutlined className={cls("base-icon", { expand: expand })} />{label}
        </div>
      }
    >
      {children}
    </Form.Item>
  )
})

export type FoldItemExtraProps = {
  className?: string,
  style?: CSSProperties,
  children?: React.ReactNode
}

export const FoldItemExtra = memo((props: FoldItemExtraProps) => {
  const { className, children, ...other } = props;
  const [, token] = useToken()
  const { expand } = useContext(FoldItemContext)
  return (
    <div className="rx-fold-item-extra-container"
      style={{ backgroundColor: token.colorBorderSecondary, height: expand ? "auto" : 0 }}
    >
      <div className={cls("rx-fold-item-extra", className)} {...other}>
        {children}
      </div>
    </div>
  )
})