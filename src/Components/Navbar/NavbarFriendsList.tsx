import React from 'react';

type NavbarFriendsType = {
    id: string
    name: string
}

export const NavbarFriendsList = (props: NavbarFriendsType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

