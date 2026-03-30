import { Card } from 'flowbite-react'
import ToggleDarkMode from './ToggleDarkMode'

const TitleCard = () => {
  return (
    <Card className="rounded-t-none rounded-b-3xl pb-30 -z-10">
        <main className="flex flex-row justify-between items-center pt-4 px-30">
          <div>
            <h1 className="text-3xl font-semibold dark:text-white">Social Media Dashboard</h1>
            <p className="dark:text-gray-400">Total Followers: 23,004</p>
          </div>
          {/* <Card className="dark:bg-[#1F212E]">Im a vard</Card> */}
          <ToggleDarkMode />
        </main>
      </Card>
  )
}

export default TitleCard