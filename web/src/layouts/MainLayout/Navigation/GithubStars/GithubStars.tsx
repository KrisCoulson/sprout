import { StarIcon } from '@heroicons/react/solid'

const GithubStars = () => {
  return (
    <a
      className="flex items-center no-underline"
      href="https://github.com/redwoodjs/redwood"
      title="Go to Redwood's GitHub repo"
    >
      <div className="flex item-center">
        <div className="flex items-center pt-[1px] text-xs font-semibold bg-rw-orange text-orange-100 px-2 rounded-l">
          <StarIcon className="block h-4 w-4" />
          11,432
        </div>
        <div className="w-3 overflow-hidden inline-block">
          <div className="h-3 bg-rw-orange rotate-45 transform origin-top-left"></div>
        </div>
      </div>
      <div className="w-6 h-6">
        <svg
          viewBox="0 0 32 32"
          className="transition duration-200 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.9995 -8.73473e-07C12.198 -0.00275596 8.5196 1.34817 5.62346 3.81077C2.72731 6.27336 0.802616 9.6867 0.194194 13.4393C-0.414229 17.1919 0.333374 21.0385 2.30307 24.29C4.27276 27.5415 7.33584 29.9855 10.9435 31.184C11.7435 31.344 12.0315 30.832 12.0315 30.416L12.0155 27.696C7.56755 28.656 6.62355 25.552 6.62355 25.552C5.88755 23.696 4.84755 23.2 4.84755 23.2C3.40755 22.208 4.95955 22.24 4.95955 22.24C6.55955 22.352 7.40755 23.888 7.40755 23.888C8.84755 26.32 11.1515 25.616 12.0635 25.216C12.2235 24.176 12.6235 23.472 13.0715 23.072C9.51955 22.672 5.79155 21.296 5.79155 15.168C5.79155 13.408 6.41555 11.984 7.43955 10.864C6.95565 9.4866 7.01283 7.97684 7.59955 6.64C7.59955 6.64 8.94355 6.208 11.9995 8.272C14.6192 7.56384 17.3799 7.56384 19.9995 8.272C23.0555 6.192 24.3995 6.64 24.3995 6.64C25.2795 8.832 24.7195 10.48 24.5595 10.864C25.5835 11.984 26.2075 13.424 26.2075 15.168C26.2075 21.312 22.4635 22.656 18.8955 23.056C19.4715 23.552 19.9835 24.528 19.9835 26.016L19.9675 30.416C19.9675 30.832 20.2555 31.344 21.0715 31.184C24.6806 29.985 27.7445 27.5398 29.7141 24.2866C31.6837 21.0334 32.4302 17.185 31.8197 13.4314C31.2092 9.67772 29.2816 6.26427 26.3825 3.80296C23.4835 1.34165 19.8025 -0.00657403 15.9995 -8.73473e-07Z" />
        </svg>
      </div>
    </a>
  )
}

export default GithubStars
