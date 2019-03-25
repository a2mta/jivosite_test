export const Loadable = (Component: any) => (props: any) =>
    <React.Suspense fallback={<div>Загружаем...</div>}>
        <Component {...props} />
    </React.Suspense>

