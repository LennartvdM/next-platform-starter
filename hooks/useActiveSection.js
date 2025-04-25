'use client';
import {useEffect,useState} from'react';
export function useActiveSection(ids=[]){
  const [active,setActive]=useState(ids[0]||null);
  useEffect(()=>{
    const o=new IntersectionObserver(es=>{
      const v=es.find(e=>e.isIntersecting);
      if(v?.target.id) setActive(v.target.id);
    },{rootMargin:'-45% 0px -45% 0px'});
    ids.forEach(id=>{const el=document.getElementById(id);el&&o.observe(el)});
    return()=>o.disconnect();
  },[ids]);
  return active;
}
