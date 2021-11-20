
import  '../styles/button.scss'

import {ButtonHTMLAttributes} from 'react';

/* Fornece propriedades e métodos (além da interface HTMLElement regular, ela também está disponível por herança) para manipular elementos. */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/* type ButtonProps = {
  type: string;
}
 */

export function Button(props: ButtonProps ) {
  /* 
    Tecnica de spread operator , com essa tecnica é possivel distribuir 
    todas as propriedade vindas por parâmetro 
  */
  return <button className="button" {...props} />;
}

