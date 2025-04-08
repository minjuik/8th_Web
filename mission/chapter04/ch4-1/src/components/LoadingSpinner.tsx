export const LoadingSpinner = () => {
    return (
        <div 
            className="size-12 animate-spin rounded-full border-6
            border-t-transparent border-[lightblue]" 
            role='status'
        >
            <span className="sr-only">로딩중...</span>
        </div>
    )
}