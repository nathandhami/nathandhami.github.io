
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import './Contact.scss'
import Grid from '@material-ui/core/Grid';
class ContactCard extends Component {
    render() {
        var cardStyle = {
            display: 'block',
            height: '200px',
        }
        return (
            <Card style={cardStyle}>
                <CardHeader title="Contact"></CardHeader>
                <CardContent>
                <Grid container direction="row" justify="center" alignItems="center">
                    <div className="d-flex flex-row d-highlight mb-3" >
                    <div className="p-2 bd-highlight">
                        <a href="https://github.com/nathandhami" className="btn Github-link">
                        <div class="btn-content">
                            <svg className="Github-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                            <span className="Github-label"> GITHUB</span>
                        </div>
                        </a>
                    </div>
                    <div className="p-2 bd-highlight">
                        <a href="https://linkedin.com/in/nathandhami" className="btn Linkedin-link">
                        <div className="btn-content">
                        <svg className="Linkedin-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                        </svg>
                            <span className="Linkedin-label"> LINKEDIN</span> 
                        </div>
                        </a>
                    </div>
                    <div className="p-2 bd-highlight">
                        <a href="mailto:nda24@sfu.ca" className="btn Email-link">
                        <div className="btn-content">
                            <svg className="Email-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                            </svg>
                            <span className="Email-label"> EMAIL</span> 
                        </div>
                        </a>
                    </div>
                    </div>
                </Grid>      
                </CardContent>
            </Card>
        );
    }
}

export default ContactCard;