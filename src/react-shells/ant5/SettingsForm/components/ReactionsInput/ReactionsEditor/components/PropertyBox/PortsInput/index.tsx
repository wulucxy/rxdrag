import { Button, Popover } from "antd";
import { memo, useCallback, useState } from "react";
import { IPortMeta } from "runner/reaction/interfaces/metas";
import { PortsTable } from "./PortsTable";

export const PortsInput = memo((
  props: {
    title: string,
    popoverTitle: string,
    value?: IPortMeta[],
    onChange?: (value?: IPortMeta[]) => void
  }
) => {
  const { title, popoverTitle, value, onChange } = props
  const [open, setOpen] = useState(false);

  const hide = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
  }, []);
  return (
    <Popover
      content={
        <PortsTable onClose={hide} />
      }
      title={popoverTitle}
      placement="bottomRight"
      trigger="click"
      onOpenChange={handleOpenChange}
    >
      <Button>{title}</Button>
    </Popover>

  )
})