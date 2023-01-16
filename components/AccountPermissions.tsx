import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Header, Checkbox, Table, Icon } from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl';
import cookie from 'js-cookie';
import formatDate from '../utils/formatDate';

function AccountPermissions() {
  const [users, setUsers] = useState<any>([]);
  const [desktop, setDesktop] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url: string = `${baseUrl}/api/users`;
    const token = cookie.get('token');
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    //console.log(response.data);
    setUsers(response.data);
  }

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div style={{ margin: '2em 0' }}>
      <Header as="h2">
        <Icon name="settings" />
        User Permissions
      </Header>
      <Table compact celled definition>
        {desktop ? (
          <>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Joined</Table.HeaderCell>
                <Table.HeaderCell>Updated</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </>
        ) : null}
        <Table.Body>
          {users.map((user) => (
            <UserPermission key={user._id} user={user} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function UserPermission({ user }) {
  const [admin, setAdmin] = useState<boolean>(user.role === 'admin');

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    //console.log('role updated', admin);
    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin((prevState) => !prevState);
  }

  async function updatePermission() {
    const url: string = `${baseUrl}/api/account`;
    const payload = { _id: user._id, role: admin ? 'admin' : 'user' };
    await axios.put(url, payload);
  }

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox checked={admin} toggle onChange={handleChangePermission} />
      </Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
      <Table.Cell>{formatDate(user.updatedAt)}</Table.Cell>
      <Table.Cell>{admin ? 'admin' : 'user'}</Table.Cell>
    </Table.Row>
  );
}

export default AccountPermissions;
