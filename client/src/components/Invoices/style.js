import { fade } from "@material-ui/core/styles/colorManipulator";
export default theme => ({
    root: {
        width: "99%",
        marginTop: theme.spacing.unit * 3
    },
    rootbar:{
        width:"100%",
    },
    table: {
        minWidth: 1000
    },
    tableWrapper: {
        overflowX: "auto"
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        fontSize: 30,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            fontSize: 50,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 30,
        width: '43%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 120,
            width: '40%',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 11,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});
