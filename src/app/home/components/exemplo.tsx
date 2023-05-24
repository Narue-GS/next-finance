import style from "../style/Exemplo.module.css"
import { receive, expense, active } from "@/app/types"

export default function Exemplo() {

  const exempleReceives:Array<receive> = [
    {title:"Entrada", value:1200, from_:"Dinheiro"},
    {title:"Entrada", value:1200, from_:"Dinheiro"},
    {title:"Entrada", value:1200, from_:"Dinheiro"},
    {title:"Entrada", value:1200, from_:"Dinheiro"},
    {title:"Entrada", value:1200, from_:"Dinheiro"},
  ]

  const exempleExpenses:Array<expense> = [
    {title:"Saida", value:1200},
  ]

  const exempleActives:Array<active> = [
    {title:"Dinheiro", value:1200},
    {title:"Dinheiro", value:1200},
  ] 

  // const exemplePassives:Arr

  const defineActives = (receives:Array<receive>):active[] => {
    let titles:string[] = []
    let actives:active[] = []
    receives.forEach((i) => {
      if(!titles.includes(i.from_)) {
        titles.push(i.from_)
        let active:active = {
          title: i.from_,
          value: receives.map((i) => i.value).reduce((x, next) => x + next)
        }
         actives.map(i => i.title).includes(active.title) ? false : actives.push(active)
      }
    })
    return actives
  }

  const totalReceives = exempleReceives.map(i =>i.value).reduce((i, next) => i + next)
  const totalExpenses =  exempleExpenses.map(i =>i.value).reduce((i, next) => i + next)

  return(
    <section className={style.table}>
      <div className={style.col}>
        <div className={style.title}>
          <span>DRE</span>
        </div>
        <div className={style.board}>
          <span>
            Receitas:
          </span>
          <div className={style.list}>
            {exempleReceives.map(i => {
              return <div className={style.receive}>
                      <span>{i.title}: </span>
                      <span>R${Number.isInteger(i.value) ? i.value.toString() + ".00" : i.value.toFixed(2)}</span>
                     </div>
            })}
          </div>
          <div className={style.total}>
            <span className={style.totalReceive}>
              Total: R${Number.isInteger(totalReceives) ? totalReceives.toString()+".00" : totalReceives}
            </span>
          </div>
        </div>
        <div className={style.board}>
          <span>
            Despesas:
          </span>
          <div className={style.list} >
            {exempleExpenses.map(i => {
              return <div className={style.expense}>
                      <span>{i.title}: </span>
                      <span>R${Number.isInteger(i.value) ? i.value.toString() + ".00" : i.value.toFixed(2)}</span>
                     </div>
            })}
          </div>
          <div className={style.total}>
            <span className={style.totalExpense}>
              Total: R${Number.isInteger(totalExpenses) ? totalExpenses.toString()+".00" : totalExpenses}
            </span>
          </div>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.title}>
          <span>Balanco Patrimonial</span>
        </div>
        <div className={style.row}>
          <div className={style.board} id={style.bigBoard}>
            <span> Ativo: </span>
            <div className={style.list}>
              {defineActives(exempleReceives).map(i => {
                return <div className={style.active}>
                        <span>{i.title}: </span>
                        <span>R${Number.isInteger(i.value) ? i.value.toString() + ".00" : i.value.toFixed(2)}</span>
                      </div>
              })}
            </div>
          </div>
          <div className={style.board} id={style.bigBoard}>
            <span> Passivo: </span>
            <div className={style.list}>
              {exempleActives.map(i => {
                return <div className={style.active}>
                        <span>{i.title}: </span>
                        <span>R${Number.isInteger(i.value) ? i.value.toString() + ".00" : i.value.toFixed(2)}</span>
                      </div>
              })}
            </div>
          </div>  
        </div> 
      </div>
    </section>
  )
}