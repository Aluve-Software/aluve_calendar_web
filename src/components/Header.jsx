import * as React from "react";   
// importing material UI components 
import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const styles = {
  color: 'white'
}
  
export default function Header() {
    const { isAuthenticated, user } = useAuth0();  
    return ( 
      <AppBar position="static"> 
        <Toolbar>   
          {/* The Typography component applies  
           default font weights and sizes */} 
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}> 
            Aluve Calendar Software 
          </Typography>
          { !isAuthenticated ? (
              <Link to="/login"><Button style={styles}>Login</Button></Link>
          ) : (
            <>
                <Link to="/profile"><Button style={styles}>User Profile</Button> </Link>
                <Link to="/logout"><Button style={styles}>Logout</Button> </Link>
                <img 
                    src={user.picture}
                    className="rounded-sm"
                    alt={user.name}
                />
            </>
          )}
        </Toolbar> 
      </AppBar> 
  ); 
}