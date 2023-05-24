import style from "../style/Banner.module.css"

export default function Banner({children}:any) {
  return (
    <>
      <section className={style.container}>
        <div>
          {children}
        </div>
      </section>
    </>
  )
}
