export const actions = {
    default: async ({request})=>{
        const formData = await request.formData();
        const nom = formData.get('nom');
        const message = formData.get('message');

        return {
            nom : nom,
            message : message
        };
    },
};