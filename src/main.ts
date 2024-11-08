import './style.css';
import { getItem, getByKey, getByValue, getByDesc, getByList, getByOptions, has } from './enum.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>format-enum</h1>
    <div class="card">
      <button id="getItem" type="button">getItem</button>
      <button id="getByKey" type="button">getByKey</button>
      <button id="getByValue" type="button">getByValue</button>
      <button id="getByDesc" type="button">getByDesc</button>
      <button id="getByList" type="button">getByList</button>
      <button id="getByOptions" type="button">getByOptions</button>
      <button id="has" type="button">has</button>
    </div>
  </div>
`;

getItem(document.querySelector<HTMLButtonElement>('#getItem')!);

getByKey(document.querySelector<HTMLButtonElement>('#getByKey')!);

getByValue(document.querySelector<HTMLButtonElement>('#getByValue')!);

getByDesc(document.querySelector<HTMLButtonElement>('#getByDesc')!);

getByList(document.querySelector<HTMLButtonElement>('#getByList')!);

getByOptions(document.querySelector<HTMLButtonElement>('#getByOptions')!);

has(document.querySelector<HTMLButtonElement>('#has')!);
