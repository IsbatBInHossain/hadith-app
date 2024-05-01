import Selection from './Selection/Selection'

const MainBody = () => {
  return (
    <div className=' fixed left-24 max-md:left-0 max-md:bottom-20 max-md:calc-height-body md:rounded-tl-3xl calc-height w-full px-5 bg-hadith-bg flex justify-between items-center'>
      <Selection />
    </div>
  )
}

export default MainBody
