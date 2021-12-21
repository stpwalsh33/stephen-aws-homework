import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Card, CardContent, Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import ReactTable from 'react-table';
import { getData } from '../api'
import '../assets/scss/dashboard.scss';

class Dashboard extends Component {
  state = {
    data: [],
    pageSize: 10,
    page: 0
  }

  componentDidMount() {
    let data = getData();
    this.setState({ data });
  }

  render() {
		if (!this.props.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: '/',
          }} />
      )
    }

    const { data, pageSize, page } = this.state;
    const columns = [
      {
        Header: 'ID',
        // Header: () => <small className="my_custom_class">Name</small>,
        id: 'id',
        accessor: 'id'
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: 'name'
      },
      {
        Header: 'Type',
        id: 'type',
        accessor: 'type'
      },
      {
        Header: 'Status',
        id: 'status',
        accessor: 'status',
        Cell: ({ original }) => (
          <div className='status-container'>
            <div
              className={
                original.status === 'running' ?
                  'status-running'
                  : original.status === 'pending' ?
                    'status-pending' :
                    'status-stopping'
              }
            />
            <span>{ original.status }</span>
          </div>
        )
      },
      {
        Header: 'Region',
        id: 'region',
        accessor: 'region'
      },
      {
        Header: 'Public IP',
        id: 'public_ip',
        accessor: 'public_ip'
      },
      {
        Header: 'Private IP',
        id: 'private_ips',
        accessor: 'private_ips'
      },
    ];

    return (
      <Container maxWidth="lg" className="dashboard-page">
        <Card>
          <CardContent>
            <h1>My AWS Instances</h1>
            <ReactTable
              data={data}
              className="-striped -highlight"
              defaultPageSize={10}
              pageSize={pageSize}
              page={page}
              onPageChange={e => this.setState({ page: e })}
              onPageSizeChange={e => this.setState({ pageSize: e, page: 0 })}
              minRows={10}
              columns={columns}
            />
          </CardContent>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(withSnackbar(Dashboard));
