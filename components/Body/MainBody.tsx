import Content from './Content/Content'
import Selection from './Selection/Selection'
import Setting from './Settings/Setting'

const MainBody = () => {
  return (
    <div className=' fixed left-24 max-md:left-0 max-md:bottom-20 max-md:calc-height-body md:rounded-tl-3xl calc-height w-full px-5 pr-28 max-md:pr-0 max-md:px-0 bg-hadith-bg flex justify-between items-center'>
      <Selection />
      <Content />
      <Setting />
    </div>
  )
}

export default MainBody
