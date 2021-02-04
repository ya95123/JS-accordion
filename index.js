const topics = document.getElementsByClassName("topic")
const openToggles = document.getElementsByClassName("openToggle")
const contents = document.getElementsByClassName("content")

for (let i = 0; i < topics.length; i++) {
  // 迴圈出每個對應的 isOpen
  let isOpen = false
  // 每個 openToggle 的高度
  let toggleHeight = openToggles[i].scrollHeight

  // 監聽 openToggle 變化
  const toggleObserver = new ResizeObserver(() => {
    if (isOpen) {
      // 已打開，所以可以直接抓取 content 內的高度
      toggleHeight = contents[i].scrollHeight
      openToggles[i].style.height = `${toggleHeight}px`
    }
  })
  toggleObserver.observe(openToggles[i])

  // 點擊開關
  topics[i].onclick = () => {
    isOpen = !isOpen
    isOpen ? openToggles[i].style.height = `${toggleHeight}px` : openToggles[i].style.height = "0px"
  }
}

