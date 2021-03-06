import * as React from "react";

function IconPhoto({
  size = 24,
  color = "currentColor",
  stroke = 1,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={15} y1={8} x2={15.01} y2={8} /><rect x={4} y={4} width={16} height={16} rx={3} /><path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" /><path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /></svg>;
}

export default IconPhoto;