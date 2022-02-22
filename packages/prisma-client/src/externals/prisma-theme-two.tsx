import TH2, { PrismaThemeTwo } from "@tl-prisma/theme-two"
import { useTheme } from "styled-components"

/**
 * TODO: Replace the TH1Button by the one coming from the library 'prisma-theme-one'
 */
interface TH2ButtonProps {
    label: string
}

export const TH2Button = (props: TH2ButtonProps) => {
    const theme = useTheme()
    return (
        <TH2 theme={theme} {...props}/>
    )
}

export const TH2Theme = PrismaThemeTwo

/**
 * TODO: Set the customisations matching the enabled state of the TH1Button
 * See the Customisations/States section in the taask description
 */
export const TH2Customisations = {
    color: PrismaThemeTwo.color.sun
}