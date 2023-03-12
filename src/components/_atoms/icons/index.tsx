import * as React from 'react'
import { SVGProps } from 'react'

export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.5} clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6 12.05a6.667 6.667 0 1 1 1.419-1.408.89.89 0 0 1 .022.021l3.252 3.253a1 1 0 1 1-1.414 1.414l-3.252-3.252a.994.994 0 0 1-.027-.028Zm.733-5.383a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0Z"
        fill="#0D0C22"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
