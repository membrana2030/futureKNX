export function useRules() {
    return {
        isEmail: (v:string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
        isRequired: (v:any) => !!v || 'Field is required',
    }
}