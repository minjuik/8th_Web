import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  //value나 delay가 변경될 때마다 실행
  useEffect(() => {
    // delay (ms) 후에 실행함
    // delay 시간 후에 value를 debouncedValue로 업데이트하는 타이머를 시작
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    // value가 변경되면, 기존 타이머를 지워서 업데이트를 취소함
    // 값이 바뀔 때마다 마지막에 멈춘 값만 업데이트 된다.
    return () => clearTimeout(handler);
  }, [value, delay]);

  // 최종적으로 "잠시 기다린 후의" 값을 반환
  return debouncedValue;
}

export default useDebounce;
