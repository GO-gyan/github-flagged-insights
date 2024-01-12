type AwaitProps<T> = {
    promise: Promise<T>;
    children: (value: T) => JSX.Element;
};
export default async function Await<T>({ promise, children }: AwaitProps<T>) {
    let data = await promise;

    return children(data);
}
