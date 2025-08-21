import osUtils from 'os-utils';

const POLLING_INTERVAL = 500;
export function pollResources(){
    setInterval(() => {
        getcpuuseage();
    },POLLING_INTERVAL);
}

function getcpuuseage(){
    osUtils.cpuUsage((percentage)=>console.log(percentage));
}