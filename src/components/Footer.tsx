
type FooterProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Footer({ setOpen }: FooterProps) {
  return (
    <footer 
    id="Contact"
    onClick={() => setOpen(false)}
    className="-mb-6 bg-black text-white w-full p-3 flex flex-col gap-y-10">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3>R . S . V . P</h3>
          <div className="font-semibold">
            <p className="font-medium">Call:</p>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <p>Bukola</p>
                <a href='tel+2349130014348' className="inter font-medium">09130014348</a>
              </div>  
              <div className="flex flex-col items-center">
                <p>Victor</p>
                <a href='tel+2348106346950' className="inter font-medium">08106346950</a>
              </div>  
            </div>
          </div>
        </div>

        <a href="#Home">
          <figure className="bg-gray-800 w-14 h-14 rounded-full">
            <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7237.jpg?alt=media&token=7e15e73c-3aeb-49b6-bf16-238f4e3f6f70'" alt="" className="rounded-full h-full w-full object-cover" loading="lazy" />
          </figure>
        </a>
      </div>

      <p className="text-center inter text-xs">Copyright &copy; {new Date().getFullYear()}  OLAMIKUN'24{}</p>
    </footer>
  )
}
