import { PropsWithChildren, ReactElement } from "react";
import {
  FaChartBar,
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaRegThumbsUp,
} from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";

import { PrescriptionsDialog } from "~/components/Dialogs";

import { Box, BoxProps, Divider, Typography } from "@mui/material";

type MedicineBoxProps = {
  icon?: ReactElement;
  isDown?: boolean;
  isUp?: boolean;
};

function MedicineBox({
  icon,
  children,
  isUp,
  isDown,
}: PropsWithChildren<MedicineBoxProps>) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {icon}
        <Typography color="#6B6B6D" fontSize="14px" mx={1}>
          {children}
        </Typography>
      </Box>
      {isUp && <FaChevronCircleUp fontSize="small" color="green" />}
      {isDown && <FaChevronCircleDown fontSize="small" color="red" />}
    </Box>
  );
}

type MedicineCardProps = {
  name?: string;
  comment?: string;
  percentage?: number;
  cat?: string;
} & BoxProps;

function MedicineCard({ name, cat, comment, percentage }: MedicineCardProps) {
  return (
    <Box
      p={3}
      boxShadow="0px 5px 6px #02568017"
      bgcolor="white"
      borderRadius="16px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="233px"
    >
      <Typography fontWeight="700">{name}</Typography>
      <MedicineBox icon={<FaChartBar fontSize="small" />} isUp>
        {cat}
      </MedicineBox>
      <MedicineBox icon={<FaRegThumbsUp fontSize="small" />} isDown>
        {comment}
      </MedicineBox>
      <MedicineBox icon={<MdOutlineAutoGraph fontSize="small" />} isDown>
        {`Prescrições ${percentage}%`}
      </MedicineBox>
      <Divider />
      <PrescriptionsDialog />
    </Box>
  );
}

export { MedicineCard };
