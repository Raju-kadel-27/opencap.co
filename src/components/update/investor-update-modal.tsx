import Modal from "@/components/shared/modal";
import { type DialogProps } from "@radix-ui/react-dialog";
import React from "react";
import MultiSelectStakeholder from "./multi-select-stakeholders";

interface InvestorUpdateModalProps {
  size?: "3xl" | "4xl";
  title: string;
  subtitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: any;
  trigger: string | React.ReactNode;
  dialogProps: DialogProps;
}

const InvestorUpdateModal = ({
  size,
  title,
  subtitle,
  callback,
  trigger,
  dialogProps,
}: InvestorUpdateModalProps) => {
  return (
    <Modal
      size={size}
      title={title}
      subtitle={subtitle}
      trigger={trigger}
      dialogProps={dialogProps}
    >
      <MultiSelectStakeholder callback={callback} />
    </Modal>
  );
};

export default InvestorUpdateModal;