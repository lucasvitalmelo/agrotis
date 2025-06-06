import type { ReactElement } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export function TooltipStyled({ title, children }: { title: string, children: ReactElement }) {
  return (
    <Tooltip
      placement='top'
      title={title}
      slotProps={{
        popper: {
          sx: {

            [`& .${tooltipClasses.tooltip}`]:
            {
              'background': '#828D8C',
            },
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
            {
              marginTop: '0px',
            },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
            {
              marginBottom: '0px',
            },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
            {
              marginLeft: '0px',
            },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
            {
              marginRight: '0px',
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}