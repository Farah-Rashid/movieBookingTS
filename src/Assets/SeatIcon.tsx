import React from 'react'

type Props = {
  colorName: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const SeatIcon = ({ colorName, onClick }: Props) => {
  return (
    <svg data-testid="svg" onClick={onClick} width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="29.5" y="12.5" width="41" height="41" fill={colorName} stroke="white" />
      <mask id="path-2-inside-1_324_100" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M28 26H6V71H94V26H72V55H28V26Z" />
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M28 26H6V71H94V26H72V55H28V26Z" fill={colorName} />
      <path d="M6 26V25H5V26H6ZM28 26H29V25H28V26ZM6 71H5V72H6V71ZM94 71V72H95V71H94ZM94 26H95V25H94V26ZM72 26V25H71V26H72ZM72 55V56H73V55H72ZM28 55H27V56H28V55ZM6 27H28V25H6V27ZM7 71V26H5V71H7ZM94 70H6V72H94V70ZM93 26V71H95V26H93ZM72 27H94V25H72V27ZM71 26V55H73V26H71ZM72 54H28V56H72V54ZM29 55V26H27V55H29Z" fill="white" mask="url(#path-2-inside-1_324_100)" />
    </svg>
  )
}

export default SeatIcon;



