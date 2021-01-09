import { configure } from '@storybook/react';

const req = require.context('../src/components',true,/\.story\.tsx$/) 
function loadStories() {
    req.keys().map(fileName=>req(fileName))
    // 可以是任意目录，根据自己需要写路径
}

configure(loadStories, module);