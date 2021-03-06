import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ChoresImage from './images/chores.jpg';
import BillsImage from './images/bills.jpeg';
import FixItImage from './images/maintenance.jpg';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

const images = [
    {
        url:ChoresImage,
        title: 'Chores',
        width: '100%',
        height: '20%',
        padding: 10,
        path: '/chores'
    },
    {
        url: FixItImage,
        title: 'Fix-it Tickets',
        width: '100%',
        height: '20%',
        padding: 10,
        path: '/fixittickets'
    },
    {
        url: BillsImage,
        title: 'About',
        width: '100%',
        height: '20%',
        padding: 10,
        path: '/about'
    },
];

function ButtonBases(props) {
    const { classes } = props

    return (
        <div className={classes.root}>
            {images.map(image => (
                <ButtonBase
                    component={Link}
                    to={image.path}
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width
                    }}
                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                </ButtonBase>
            ))}
        </div>
    );
}

ButtonBases.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);


// const HomePage = () => {
//   return (
//     <div>
//       <h1>Roseleaf Housemates</h1>
//       <h2>Navigate to:</h2>
//       <ul>
//         <li><Link to="/chores">Chores</Link></li>
//         <li><Link to="/bills">Bills</Link></li>
//         <li><Link to="/fixittickets">Fix-it Tickets</Link></li>
//       </ul>
//     </div>
//   );
// };
//
// export default HomePage;
