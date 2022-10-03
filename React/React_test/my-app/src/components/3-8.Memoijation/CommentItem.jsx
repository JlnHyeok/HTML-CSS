import React,{Profiler, memo} from 'react'
import { useMemo } from 'react'
import "./CommentItem.css"

function CommentItem({title, content, likes, onClick}) {
  const [clickCount, setClickCount] = React.useState(0)

  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간 
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    console.log(`actualDuration ${title} : ${actualDuration}`)
  }

  const handleClick = () => {
    onClick()
    setClickCount(prev => prev+1)
    alert(`${title} 눌림`)
  }

  // useMemo로 할떄에는 {}안에 ()뺴고 넣어줘야한다.
  const rate = useMemo(() => {
    console.log("rate check")
    return likes>10 ? 'Good' : 'Bad'
  },[])

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
    <div className="CommentItem" onClick={handleClick}>
      <span>{title}</span>
      <br/>
      <span>{content}</span>
      <br/>
      <span>{likes}</span>
      <br />
      <span>{rate}</span>
      <br />
      <span>{clickCount}</span>
    </div>
    </Profiler>
  )
}

export default memo(CommentItem)
// memo 를 안하면 하나하나 생성될 때 마다 하나씩 그려지는게 아니라 모두 다 새로 그려진다.
// memo 를 사용하면 생성될 때 마다 하나씩 새로 그려짐