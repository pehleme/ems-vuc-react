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

type MedicationBoxProps = {
  icon?: ReactElement;
  isDown?: boolean;
  isUp?: boolean;
};

function MedicationBox({
  icon,
  children,
  isUp,
  isDown,
}: PropsWithChildren<MedicationBoxProps>) {
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

type MedicationCardProps = {
  name?: string;
  comment?: string;
  percentage?: number;
  cat?: string;
} & BoxProps;

function MedicationCard({
  name,
  cat,
  comment,
  percentage,
}: MedicationCardProps) {
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
      <MedicationBox icon={<FaChartBar fontSize="small" />} isUp>
        {cat}
      </MedicationBox>
      <MedicationBox icon={<FaRegThumbsUp fontSize="small" />} isDown>
        {comment}
      </MedicationBox>
      <MedicationBox icon={<MdOutlineAutoGraph fontSize="small" />} isDown>
        {`Prescrições ${percentage}%`}
      </MedicationBox>
      <Divider />
      <PrescriptionsDialog />
    </Box>
  );
}

export { MedicationCard };
