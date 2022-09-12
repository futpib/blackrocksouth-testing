
export async function postNames(values: {
    firstName: string;
    lastName: string;
}) {
    console.log('postNames', 'pending', values);
    await new Promise(resolve => setTimeout(resolve, 1000 * Math.random()));
    console.log('postNames', 'resolved', values);
}
