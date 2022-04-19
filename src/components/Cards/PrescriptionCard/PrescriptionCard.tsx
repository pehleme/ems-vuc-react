import { PropsWithChildren, ReactElement } from "react";
import {
  FaChartBar,
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaRegThumbsUp,
} from "react-icons/fa";

import { PrescriptionHistoryModal } from "~/components/Modals";
import { PrescriptionModel } from "~/data/models";

import { Box, BoxProps, Divider } from "@mui/material";

type PrescriptionBoxProps = {
  icon?: ReactElement;
  isDown?: boolean;
  isUp?: boolean;
};

function PrescriptionBox({
  icon,
  children,
  isUp,
  isDown,
}: PropsWithChildren<PrescriptionBoxProps>) {
  return (
    <Box className="flex justify-between items-center">
      <Box className="flex items-center space-x-2">
        {icon}
        <Box className="text-gray-500">{children}</Box>
      </Box>
      {isUp && (
        <FaChevronCircleUp fontSize="small" className="text-green-500" />
      )}
      {isDown && (
        <FaChevronCircleDown fontSize="small" className="text-red-500" />
      )}
    </Box>
  );
}

type PrescriptionCardProps = PrescriptionModel & BoxProps;

export function PrescriptionCard({
  name,
  cat,
  comment,
  percentage,
}: PrescriptionCardProps) {
  return (
    <Box
      className="flex flex-col justify-between p-5 space-y-5 h-full bg-white rounded-2xl shadow-lg"
      sx={{ minWidth: 230, minHeight: 230 }}
    >
      <Box className="text-lg font-bold uppercase">{name}</Box>
      <PrescriptionBox icon={<FaChartBar fontSize="small" />} isUp>
        {cat}
      </PrescriptionBox>
      <PrescriptionBox icon={<FaRegThumbsUp fontSize="small" />} isDown>
        {comment}
      </PrescriptionBox>
      <PrescriptionBox icon={<FaChartBar fontSize="small" />} isDown>
        {`Prescrições ${percentage}%`}
      </PrescriptionBox>
      <Divider />
      <Box className="flex justify-center">
        <PrescriptionHistoryModal />
      </Box>
    </Box>
  );
}
