export function changeTheme(newTheme) {
    return {
        type: 'THEME_CHANGE',
        payload: newTheme
    }
}