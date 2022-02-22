import TH1 , { PrismaThemeOne } from '@tl-prisma/theme-one'
import { useTheme } from 'styled-components'
/**
 * TODO: Replace the TH1Button by the one coming from the library 'prisma-theme-one'
 */
interface TH1ButtonProps {
    label: string,
    onClick?: () => void
    color?: string
    bgColor?: string
    hoverBgColor?: string
}

export const TH1Button = (props: TH1ButtonProps) => {
    const theme = useTheme()
    return (
        <TH1 theme={theme} {...props} />
    )
}

/**
 * TODO: Replace the TH1Theme by the one coming from the library 'prisma-theme-one'
 * Replaced with Theme one const
 */
export const TH1Theme = PrismaThemeOne

/**
 * TODO: Set the customisations matching the enabled state of the TH1Button
 * See the Customisations/States section in the taask description
 */
export const TH1Customisations = {
    color: PrismaThemeOne.color.white,
    bgColor: PrismaThemeOne.color.azure,
    hoverBgColor: PrismaThemeOne.color.cloudBurst
}
