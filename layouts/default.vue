<template>
  <div id="page-top">
    <div id="wrapper">

      <!-- Sidebar -->
      <Sidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

          <!-- Topbar -->
          <Topbar />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">

            <Nuxt />

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; IVYLEAKS ADMIN 2020</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->

      </div>
      <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
<style>

</style>
