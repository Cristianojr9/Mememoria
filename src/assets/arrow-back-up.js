import * as React from "react";

function IconArrowBackUp({
  size = 24,
  color = "currentColor",
  stroke = 1,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrow-back-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>;
}

export default IconArrowBackUp;