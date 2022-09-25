import {useEffect} from 'react';
import formatTitle from 'helpers/formatTitle';
import current_info from "data/current_info";
import titles from 'data/titles'
export default function CurrentInfo() {
  useEffect(() => {
    document.title = formatTitle('info')
  });
  return (
    <div className="section">
      <h2>{titles['info']}</h2>
      {current_info.map((row,index) => (
        <p key={index}>
          <span className="text_medium">{row.name}</span>: {row.text}{index < current_info.length - 1 && ';'}
        </p>
      ))}
    </div>
  );
}
